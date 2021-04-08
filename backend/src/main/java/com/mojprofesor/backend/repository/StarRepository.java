package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.StarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Patryk Borchowiec
 */
public interface StarRepository extends JpaRepository<StarEntity, Long> {
    boolean existsByOpinionIdAndUserId(long opinionId, long userId);
}
