using Microsoft.EntityFrameworkCore;

public class Context : DbContext{

    public DbSet<Radnici> radnici {get; set;}
    public DbSet<Vreme> vreme {get; set;}
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=192.168.0.122;Database=projekat;Username=postgres;Password=pangler234");
}


