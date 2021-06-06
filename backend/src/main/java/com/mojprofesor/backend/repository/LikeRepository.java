package com.mojprofesor.backend.repository;

import com.mojprofesor.backend.entity.LikeEntity;
import com.mojprofesor.backend.entity.LikeType;
import com.mojprofesor.backend.entity.OpinionEntity;
import com.mojprofesor.backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Patryk Borchowiec
 */
public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    boolean existsByOpinionAndUser(OpinionEntity opinion, UserEntity userEntity);
    int countAllByOpinionAndType(OpinionEntity opinion, LikeType type);
}
