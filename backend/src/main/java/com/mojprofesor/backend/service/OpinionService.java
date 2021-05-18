package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.OpinionEntity;
import com.mojprofesor.backend.entity.ProfessorEntity;
import com.mojprofesor.backend.entity.UserEntity;
import com.mojprofesor.backend.entity.UserRole;
import com.mojprofesor.backend.payload.AddOpinionRequest;
import com.mojprofesor.backend.payload.OpinionResponse;
import com.mojprofesor.backend.repository.OpinionRepository;
import com.mojprofesor.backend.repository.ProfessorRepository;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OpinionService {

    private final OpinionRepository opinionRepository;
    private final UserRepository userRepository;
    private final ProfessorRepository professorRepository;

    @Autowired
    public OpinionService(OpinionRepository opinionRepository, UserRepository userRepository,
                          ProfessorRepository professorRepository) {
        this.opinionRepository = opinionRepository;
        this.userRepository = userRepository;
        this.professorRepository = professorRepository;
    }

    public void addOpinion(AddOpinionRequest request, Principal principal) throws NotFoundException {
        UserEntity userEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        Long professorId = request.getProfessorId();
        ProfessorEntity professorEntity = professorRepository.findById(professorId)
                .orElseThrow(() -> new NotFoundException(String.format("Not found professor of id: %s", professorId)));

        OpinionEntity opinion = OpinionEntity.builder()
                .content(request.getContent())
                .details(request.getDetails())
                .user(userEntity)
                .professor(professorEntity)
                .build();

        opinionRepository.save(opinion);
    }

    public OpinionResponse getOpinionByID(Long opinionID) throws NotFoundException{
        OpinionEntity opinionEntity = opinionRepository.findById(opinionID)
                .orElseThrow(() -> new NotFoundException("Not found opinion id: " + opinionID));

        return OpinionResponse.of(opinionEntity);
    }

    public Page<OpinionResponse> getOpinionByProfessorID(Long professorID, Integer page, Integer size) throws NotFoundException {
        ProfessorEntity professorEntity = professorRepository.findById(professorID)
                .orElseThrow(() -> new NotFoundException(String.format("Not found professor of id: %s", professorID)));

        Pageable requestPage = PageRequest.of(page, size);

        List<OpinionResponse> responseList = opinionRepository.findOpinionsByProfessor(professorEntity, requestPage)
                .stream()
                .map(OpinionResponse::of)
                .collect(Collectors.toList());

        return new PageImpl<>(responseList);
    }

    public void deleteOpinion(Long opinionID, Principal principal) throws NotFoundException, AccessDeniedException {
        UserEntity userEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        OpinionEntity opinionEntity = opinionRepository
                .findById(opinionID)
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found opinion of id: %s", opinionID)));

        if (!userEntity.getRole().equals(UserRole.ROLE_ADMIN) && opinionEntity.getUser().getId() != userEntity.getId()) {
            throw new AccessDeniedException(
                    String.format(
                            "Cannot delete opinion of id %s. Principal of id %s is not a ADMIN or owner of opinion.",
                            opinionEntity.getId(), userEntity.getId()
                    )
            );
        }

        opinionRepository.deleteById(opinionID);
    }
}
