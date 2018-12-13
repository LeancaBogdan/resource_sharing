using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication2.Migrations
{
    public partial class AddUsers : Migration
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
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
