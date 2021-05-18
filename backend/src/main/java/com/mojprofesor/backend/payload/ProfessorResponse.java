package com.mojprofesor.backend.payload;

import com.mojprofesor.backend.entity.ProfessorEntity;
import lombok.Data;

@Data
public class ProfessorResponse {
    private final Long id;

    private final String firstName;
    private final String lastName;
    private final String academicTitle;
    private final Long createdBy;

    public static ProfessorResponse of(ProfessorEntity entity) {
        return new ProfessorResponse(entity.getId(),
                entity.getFirstName(),
                entity.getLastName(),
                entity.getAcademicTitle(),
                entity.getCreatedBy().getId()
        );
    }
}
