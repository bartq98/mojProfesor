package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.ProfessorEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessorRepository extends JpaRepository<ProfessorEntity, Long> {
    List<ProfessorEntity> findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName,
                                                                                             String lastName,
                                                                                             Pageable page);
}
