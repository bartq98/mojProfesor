package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.StarEntity;
import com.mojprofesor.backend.exception.StarAlreadyExistsException;
import com.mojprofesor.backend.payload.AddStarRequest;
import com.mojprofesor.backend.repository.StarRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import org.springframework.stereotype.Service;

/**
 * @author Patryk Borchowiec
 */
@Service
public class StarService {
    private final StarRepository starRepository;

    public StarService(StarRepository starRepository) {
        this.starRepository = starRepository;
    }

    public void addStar(@NonNull AddStarRequest request) throws StarAlreadyExistsException {
        final long userId = 69; // TODO temporary value

        boolean alreadyExists = starRepository.existsByOpinionIdAndUserId(request.getOpinion(), userId);
        if (alreadyExists) {
            throw new StarAlreadyExistsException("Star already exists");
        }

        StarEntity starEntity = new StarEntity();
        starEntity.setOpinionId(request.getOpinion());
        starEntity.setUserId(userId);

        starRepository.save(starEntity);
    }

    public void deleteStar(@NonNull Long id) throws NotFoundException {
        if (!starRepository.existsById(id)) {
            throw new NotFoundException(String.format("Not found star of id: %d", id));
        }

        starRepository.deleteById(id);
    }
}
