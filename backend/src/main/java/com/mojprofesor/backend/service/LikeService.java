package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.LikeEntity;
import com.mojprofesor.backend.entity.LikeType;
import com.mojprofesor.backend.exception.LikeAlreadyExistsException;
import com.mojprofesor.backend.payload.AddLikeRequest;
import com.mojprofesor.backend.payload.LikesAmountResponse;
import com.mojprofesor.backend.repository.LikeRepository;
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
        final long userId = 69; // TODO temporary value

        boolean alreadyExists = likeRepository.existsByOpinionIdAndUserId(request.getOpinion(), userId);
        if (alreadyExists) {
            throw new LikeAlreadyExistsException("Like already exists");
        }

        LikeEntity likeEntity = LikeEntity.builder()
                .userId(userId)
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
