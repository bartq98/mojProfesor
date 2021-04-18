package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.LikeEntity;
import com.mojprofesor.backend.entity.LikeType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Patryk Borchowiec
 */
public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    boolean existsByOpinionIdAndUserId(long opinionId, long userId);
    int countAllByOpinionIdAndType(long opinionId, LikeType type);
}
