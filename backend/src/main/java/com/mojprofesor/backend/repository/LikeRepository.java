package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.LikeEntity;
import com.mojprofesor.backend.entity.LikeType;
import com.mojprofesor.backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Patryk Borchowiec
 */
public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    boolean existsByOpinionIdAndUser(long opinionId, UserEntity userEntity);
    int countAllByOpinionIdAndType(long opinionId, LikeType type);
}
