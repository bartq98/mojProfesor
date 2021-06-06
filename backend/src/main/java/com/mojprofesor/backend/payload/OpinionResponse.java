package com.mojprofesor.backend.payload;

import com.mojprofesor.backend.entity.OpinionEntity;
import lombok.Data;

@Data
public class OpinionResponse {

    private final long id;
    private final long professorID;
    private final long userID;
    private final String content;
    private final String details;

    public static OpinionResponse of(OpinionEntity opinionEntity) {
        return new OpinionResponse(
                opinionEntity.getId(),
                opinionEntity.getProfessor().getId(),
                opinionEntity.getUser().getId(),
                opinionEntity.getContent(),
                opinionEntity.getDetails()
        );
    }
}
