package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.*;
import com.mojprofesor.backend.exception.LikeAlreadyExistsException;
import com.mojprofesor.backend.payload.AddLikeRequest;
import com.mojprofesor.backend.payload.LikesAmountResponse;
import com.mojprofesor.backend.repository.LikeRepository;
import com.mojprofesor.backend.repository.OpinionRepository;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.security.Principal;

/**
 * @author Patryk Borchowiec
 */
@Service
public class LikeService {
    private final LikeRepository likeRepository;
    private final UserRepository userRepository;
    private final OpinionRepository opinionRepository;

    public LikeService(LikeRepository likeRepository, UserRepository userRepository,
                       OpinionRepository opinionRepository) {
        this.likeRepository = likeRepository;
        this.userRepository = userRepository;
        this.opinionRepository = opinionRepository;
    }

    public void addLike(@NonNull AddLikeRequest request, @NonNull Principal principal) 
            throws LikeAlreadyExistsException, NotFoundException {
        UserEntity userEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        OpinionEntity opinionEntity = opinionRepository
                .findById(request.getOpinion())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found opinion of id: %s", request.getOpinion())));

        boolean alreadyExists = likeRepository.existsByOpinionAndUser(opinionEntity, userEntity);
        if (alreadyExists) {
            throw new LikeAlreadyExistsException("Like already exists");
        }

        LikeEntity likeEntity = LikeEntity.builder()
                .user(userEntity)
                .opinion(opinionEntity)
                .type(request.getType())
                .build();

        likeRepository.save(likeEntity);
    }

    public void deleteLike(@NonNull Long id, @NonNull Principal principal) throws NotFoundException,
            AccessDeniedException {
        UserEntity userEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        LikeEntity likeEntity = likeRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Not found like of id: %d", id)));

        if (!userEntity.getRole().equals(UserRole.ROLE_ADMIN) && likeEntity.getUser().getId() != userEntity.getId()) {
            throw new AccessDeniedException(
                    String.format(
                            "Cannot delete like of id %s. Principal of id %s is not a ADMIN or owner of opinion.",
                            likeEntity.getId(), userEntity.getId()
                    )
            );
        }

        likeRepository.deleteById(id);
    }

    public LikesAmountResponse getAmountOfStars(Long opinionId) throws NotFoundException {
        OpinionEntity opinionEntity = opinionRepository
                .findById(opinionId)
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found opinion of id: %s", opinionId)));

        final int up = likeRepository.countAllByOpinionAndType(opinionEntity, LikeType.UP);
        final int down = likeRepository.countAllByOpinionAndType(opinionEntity, LikeType.DOWN);

        return new LikesAmountResponse(up, down);
    }
}
