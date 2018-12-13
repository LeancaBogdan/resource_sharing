using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication2.Migrations.MockResourcesMigrations
{
    public partial class AddAllModels3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("Npgsql:PostgresExtension:btree_gin", "'btree_gin', '', ''")
                .Annotation("Npgsql:PostgresExtension:btree_gist", "'btree_gist', '', ''")
                .Annotation("Npgsql:PostgresExtension:citext", "'citext', '', ''")
                .Annotation("Npgsql:PostgresExtension:cube", "'cube', '', ''")
                .Annotation("Npgsql:PostgresExtension:dblink", "'dblink', '', ''")
                .Annotation("Npgsql:PostgresExtension:dict_int", "'dict_int', '', ''")
                .Annotation("Npgsql:PostgresExtension:dict_xsyn", "'dict_xsyn', '', ''")
                .Annotation("Npgsql:PostgresExtension:earthdistance", "'earthdistance', '', ''")
                .Annotation("Npgsql:PostgresExtension:fuzzystrmatch", "'fuzzystrmatch', '', ''")
                .Annotation("Npgsql:PostgresExtension:hstore", "'hstore', '', ''")
                .Annotation("Npgsql:PostgresExtension:intarray", "'intarray', '', ''")
                .Annotation("Npgsql:PostgresExtension:ltree", "'ltree', '', ''")
                .Annotation("Npgsql:PostgresExtension:pg_stat_statements", "'pg_stat_statements', '', ''")
                .Annotation("Npgsql:PostgresExtension:pg_trgm", "'pg_trgm', '', ''")
                .Annotation("Npgsql:PostgresExtension:pgcrypto", "'pgcrypto', '', ''")
                .Annotation("Npgsql:PostgresExtension:pgrowlocks", "'pgrowlocks', '', ''")
                .Annotation("Npgsql:PostgresExtension:pgstattuple", "'pgstattuple', '', ''")
                .Annotation("Npgsql:PostgresExtension:plv8", "'plv8', '', ''")
                .Annotation("Npgsql:PostgresExtension:tablefunc", "'tablefunc', '', ''")
                .Annotation("Npgsql:PostgresExtension:unaccent", "'unaccent', '', ''")
                .Annotation("Npgsql:PostgresExtension:uuid-ossp", "'uuid-ossp', '', ''")
                .Annotation("Npgsql:PostgresExtension:xml2", "'xml2', '', ''");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Role = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    OwnerId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    BorrowingPrice = table.Column<double>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Users_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    OwnerId = table.Column<Guid>(nullable: true),
                    BorrowerId = table.Column<Guid>(nullable: true),
                    BorrowedProductId = table.Column<Guid>(nullable: true),
                    DatePicked = table.Column<DateTime>(nullable: false),
                    DateToReturn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Transactions_Products_BorrowedProductId",
                        column: x => x.BorrowedProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transactions_Users_BorrowerId",
                        column: x => x.BorrowerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transactions_Users_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_OwnerId",
                table: "Products",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_BorrowedProductId",
                table: "Transactions",
                column: "BorrowedProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_BorrowerId",
                table: "Transactions",
                column: "BorrowerId");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_OwnerId",
                table: "Transactions",
                column: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transactions");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
