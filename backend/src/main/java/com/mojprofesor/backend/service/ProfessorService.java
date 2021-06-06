package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.ProfessorEntity;
import com.mojprofesor.backend.entity.UserEntity;
import com.mojprofesor.backend.entity.UserRole;
import com.mojprofesor.backend.payload.AddProfessorRequest;
import com.mojprofesor.backend.payload.ProfessorResponse;
import com.mojprofesor.backend.repository.ProfessorRepository;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProfessorService {

    private final ProfessorRepository professorRepository;
    private final UserRepository userRepository;

    public Page<ProfessorResponse> getAllProfessors(Integer page, Integer size) {
        Pageable requestPage = PageRequest.of(page, size);

        List<ProfessorResponse> response = professorRepository.findAll(requestPage).stream().map(
                ProfessorResponse::of
        ).collect(Collectors.toList());

        return new PageImpl<>(response);
    }

    public ProfessorResponse getProfessorById(@NonNull Long id) throws NotFoundException {
        ProfessorEntity professorEntity = professorRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Not found professor of id: " + id));

        return ProfessorResponse.of(professorEntity);
    }

    public Page<ProfessorResponse> getProfessorsByFirstNameAndLastName(String firstName, String lastName,
                                                       Integer page, Integer size) {
        Pageable requestPage = PageRequest.of(page, size);

        List<ProfessorResponse> response = professorRepository
                .findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(firstName, lastName, requestPage).stream().map(
                ProfessorResponse::of
        ).collect(Collectors.toList());

        return new PageImpl<>(response);
    }

    public void addProfessor(@NonNull AddProfessorRequest request, Principal principal) throws NotFoundException {
        UserEntity user = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        ProfessorEntity professor = ProfessorEntity.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .academicTitle(request.getAcademicTitle())
                .createdBy(user)
                .build();

        professorRepository.save(professor);
    }

    public void replaceProfessor(@NonNull AddProfessorRequest request, @NonNull Long id, Principal principal)
            throws NotFoundException, AccessDeniedException {
        UserEntity user = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        ProfessorEntity professorEntity = professorRepository.findById(id)
                .map(professor -> {
                    professor.setFirstName(request.getFirstName());
                    professor.setLastName(request.getLastName());
                    professor.setAcademicTitle(request.getAcademicTitle());
                    return professorRepository.save(professor);
                })
                .orElseThrow(() -> new NotFoundException("Not found professor of id: " + id));

        professorRepository.save(professorEntity);

        if (!user.getRole().equals(UserRole.ROLE_ADMIN) && professorEntity.getCreatedBy().getId() != user.getId()) {
            throw new AccessDeniedException(
                    String.format(
                            "Cannot update professor of id %s. Principal of id %s is not a ADMIN or owner of professor.",
                            id, user.getId()
                    )
            );
        }
    }

    public void deleteProfessor(@NonNull Long id, Principal principal) throws NotFoundException {
        UserEntity user = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        ProfessorEntity professorEntity = professorRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Not found professor of id: " + id));

        if (!user.getRole().equals(UserRole.ROLE_ADMIN) && professorEntity.getCreatedBy().getId() != user.getId()) {
            throw new AccessDeniedException(
                    String.format(
                            "Cannot delete professor of id %s. Principal of id %s is not a ADMIN or owner of professor.",
                            id, user.getId()
                    )
            );
        }

        professorRepository.deleteById(id);
    }
}
