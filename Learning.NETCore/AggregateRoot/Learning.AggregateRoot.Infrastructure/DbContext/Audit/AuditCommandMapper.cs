﻿using Learning.AggregateRoot.Domain.Audit;
using Learning.AggregateRoot.Infrastructure.DbContext.Aggregate;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Learning.AggregateRoot.Infrastructure.DbContext.Audit
{
    public class AuditCommandMapper : AggregateMap<AuditCommand>
    {
        protected override void Map(EntityTypeBuilder<AuditCommand> entity)
        {
            entity.HasKey(auditCommand => auditCommand.Id);

            entity.HasIndex(auditCommand => auditCommand.Id);
            entity.HasIndex(auditCommand => auditCommand.CommandName);
            entity.HasIndex(auditCommand => auditCommand.Command);
            entity.HasIndex(auditCommand => auditCommand.CorrelationId);
            entity.HasIndex(auditCommand => auditCommand.Date);
            entity.HasIndex(auditCommand => auditCommand.UserId);
            entity.HasIndex(auditCommand => auditCommand.ImpersonatedUserId);
        }
    }
}