package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.OpinionEntity;
import com.mojprofesor.backend.payload.AddOpinionRequest;
import com.mojprofesor.backend.payload.OpinionResponse;
import com.mojprofesor.backend.repository.OpinionRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OpinionService {

    private final OpinionRepository opinionRepository;

    @Autowired
    public OpinionService(OpinionRepository opinionRepository) {
        this.opinionRepository = opinionRepository;
    }

    public void addOpinion(AddOpinionRequest request) {
        OpinionEntity opinion = OpinionEntity.builder()
                .content(request.getContent())
                .details(request.getDetails())
                .build();

        opinionRepository.save(opinion);
    }

    public OpinionResponse getOpinionByID(Long opinionID) throws NotFoundException{
        OpinionEntity opinionEntity = opinionRepository.findById(opinionID)
                .orElseThrow(() -> new NotFoundException("Not found opinion id: " + opinionID));

        return OpinionResponse.of(opinionEntity);
    }

    public Page<OpinionResponse> getOpinionByProfessorID(Long professorID, Integer page, Integer size) {
        // TODO NotFoundOpinionAboutProfessorExpection
        Pageable requestPage = PageRequest.of(page, size);

        List<OpinionResponse> responseList = opinionRepository.findOpinionsByProfessorID(professorID, requestPage).stream().map(
                OpinionResponse::of
        ).collect(Collectors.toList());

        return new PageImpl<>(responseList);
    }
}
