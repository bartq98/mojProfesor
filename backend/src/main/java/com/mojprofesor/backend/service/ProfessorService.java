package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.ProfessorEntity;
import com.mojprofesor.backend.payload.AddProfessorRequest;
import com.mojprofesor.backend.payload.ProfessorResponse;
import com.mojprofesor.backend.repository.ProfessorRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProfessorService {

    private final ProfessorRepository professorRepository;

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

    public void addProfessor(@NonNull AddProfessorRequest request) {
        ProfessorEntity professor = ProfessorEntity.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .academicTitle(request.getAcademicTitle())
                .build();

        professorRepository.save(professor);
    }

    public void replaceProfessor(@NonNull AddProfessorRequest request, @NonNull Long id) throws NotFoundException {
        professorRepository.findById(id)
                .map(professor -> {
                    professor.setFirstName(request.getFirstName());
                    professor.setLastName(request.getLastName());
                    professor.setAcademicTitle(request.getAcademicTitle());
                    return professorRepository.save(professor);
                })
                .orElseThrow(() -> new NotFoundException("Not found professor of id: " + id));
    }

    public void deleteProfessor(@NonNull Long id) throws NotFoundException {
        if (!professorRepository.existsById(id)) {
            throw new NotFoundException("Not found professor of id: " + id);
        }

        professorRepository.deleteById(id);
    }
}
