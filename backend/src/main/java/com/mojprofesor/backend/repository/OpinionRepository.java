package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.OpinionEntity;
import com.mojprofesor.backend.entity.ProfessorEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OpinionRepository extends JpaRepository<OpinionEntity, Long> {
    List<OpinionEntity> findOpinionsByProfessor(ProfessorEntity professor, Pageable page);
}
