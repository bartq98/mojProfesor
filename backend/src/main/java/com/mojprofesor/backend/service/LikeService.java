package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.LikeEntity;
import com.mojprofesor.backend.entity.LikeType;
import com.mojprofesor.backend.entity.UserEntity;
import com.mojprofesor.backend.entity.UserRole;
import com.mojprofesor.backend.exception.LikeAlreadyExistsException;
import com.mojprofesor.backend.payload.AddLikeRequest;
import com.mojprofesor.backend.payload.LikesAmountResponse;
import com.mojprofesor.backend.repository.LikeRepository;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import org.springframework.stereotype.Service;

/**
 * @author Patryk Borchowiec
 */
@Service
public class LikeService {
    private final LikeRepository likeRepository;

    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    public void addLike(@NonNull AddLikeRequest request) throws LikeAlreadyExistsException {
        UserEntity userEntity = UserEntity.builder()
                .id(1)
                .email("mail@mail.com")
                .password("password")
                .role(UserRole.ROLE_USER)
                .build();

        boolean alreadyExists = likeRepository.existsByOpinionIdAndUser(request.getOpinion(), userEntity);
        if (alreadyExists) {
            throw new LikeAlreadyExistsException("Like already exists");
        }

        LikeEntity likeEntity = LikeEntity.builder()
                .user(userEntity)
                .opinionId(request.getOpinion())
                .type(request.getType())
                .build();

        likeRepository.save(likeEntity);
    }

    public void deleteLike(@NonNull Long id) throws NotFoundException {
        if (!likeRepository.existsById(id)) {
            throw new NotFoundException(String.format("Not found like of id: %d", id));
        }

        likeRepository.deleteById(id);
    }

    public LikesAmountResponse getAmountOfStars(Long opinionId) {
        final int up = likeRepository.countAllByOpinionIdAndType(opinionId, LikeType.UP);
        final int down = likeRepository.countAllByOpinionIdAndType(opinionId, LikeType.DOWN);

        // todo check if id exists

        return new LikesAmountResponse(up, down);
    }
}
