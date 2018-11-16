﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WebApplication2;

namespace WebApplication2.Migrations
{
    [DbContext(typeof(ResourcesContext))]
    [Migration("20181115235015_AddAllModels2")]
    partial class AddAllModels2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:PostgresExtension:btree_gin", "'btree_gin', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:btree_gist", "'btree_gist', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:citext", "'citext', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:cube", "'cube', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:dblink", "'dblink', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:dict_int", "'dict_int', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:dict_xsyn", "'dict_xsyn', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:earthdistance", "'earthdistance', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:fuzzystrmatch", "'fuzzystrmatch', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:hstore", "'hstore', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:intarray", "'intarray', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:ltree", "'ltree', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:pg_stat_statements", "'pg_stat_statements', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:pg_trgm", "'pg_trgm', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:pgcrypto", "'pgcrypto', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:pgrowlocks", "'pgrowlocks', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:pgstattuple", "'pgstattuple', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:plv8", "'plv8', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:tablefunc", "'tablefunc', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:unaccent", "'unaccent', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:uuid-ossp", "'uuid-ossp', '', ''")
                .HasAnnotation("Npgsql:PostgresExtension:xml2", "'xml2', '', ''")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("WebApplication2.Domain.Models.ProductModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("BorrowingPrice");

                    b.Property<string>("Description");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<Guid?>("OwnerId");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("WebApplication2.Domain.Models.TransactionModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("BorrowedProductId");

                    b.Property<Guid?>("BorrowerId");

                    b.Property<DateTime>("DatePicked");

                    b.Property<DateTime>("DateToReturn");

                    b.Property<Guid?>("OwnerId");

                    b.HasKey("Id");

                    b.HasIndex("BorrowedProductId");

                    b.HasIndex("BorrowerId");

                    b.HasIndex("OwnerId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("WebApplication2.Domain.Models.UserModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<int>("Role");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebApplication2.Domain.Models.ProductModel", b =>
                {
                    b.HasOne("WebApplication2.Domain.Models.UserModel", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("WebApplication2.Domain.Models.TransactionModel", b =>
                {
                    b.HasOne("WebApplication2.Domain.Models.ProductModel", "BorrowedProduct")
                        .WithMany()
                        .HasForeignKey("BorrowedProductId");

                    b.HasOne("WebApplication2.Domain.Models.UserModel", "Borrower")
                        .WithMany()
                        .HasForeignKey("BorrowerId");

                    b.HasOne("WebApplication2.Domain.Models.UserModel", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });
#pragma warning restore 612, 618
        }
    }
}
