﻿// <auto-generated />
using System;
using Learning.AggregateRoot.Infrastructure.DbContext;
using Learning.AggregateRoot.Infrastructure.DbContext.Audit;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Learning.AggregateRoot.Infrastructure.Migrations.AuditDb
{
    [DbContext(typeof(AuditDbContext))]
    [Migration("20201010172934_removeAggregateRootNameInAuditCommand")]
    partial class removeAggregateRootNameInAuditCommand
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Learning.AggregateRoot.Domain.AuditCommand", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Command")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CommandName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<Guid>("CorrelationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ImpersonatedUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("Command");

                    b.HasIndex("CommandName");

                    b.HasIndex("CorrelationId");

                    b.HasIndex("Date");

                    b.HasIndex("Id");

                    b.HasIndex("ImpersonatedUserId");

                    b.HasIndex("UserId");

                    b.ToTable("AuditCommands");
                });

            modelBuilder.Entity("Learning.AggregateRoot.Domain.AuditEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CorrelationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Event")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("EventName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<Guid>("ImpersonatedUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("CorrelationId");

                    b.HasIndex("Date");

                    b.HasIndex("Event");

                    b.HasIndex("EventName");

                    b.HasIndex("Id");

                    b.HasIndex("ImpersonatedUserId");

                    b.HasIndex("UserId");

                    b.ToTable("AuditEvents");
                });
#pragma warning restore 612, 618
        }
    }
}
