using Microsoft.EntityFrameworkCore.Migrations;

namespace DbLayer.Migrations
{
    public partial class ChangeModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "EndTime",
                table: "Orders",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Orders");
        }
    }
}
