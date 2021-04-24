package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.OpinionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;
import java.util.List;


public interface OpinionRepository extends JpaRepository<OpinionEntity, Long> {
    List<OpinionEntity> findOpinionsByProfessorID(long professorID, Pageable page);
}
