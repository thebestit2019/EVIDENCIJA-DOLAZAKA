
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


[Table ("vreme")]
public class Vreme{

    [Key]
    [Column("id")]
    public int id {get; set;}

    [Column("datum")]
    public TimeSpan datum {get; set;}

    [Column("vreme dolaska")]
    public TimeSpan vremeDolaska {get; set;}

    [Column("vreme odlaska")]
    public TimeSpan vremeOdlaska {get; set;}

    [Column("slika_1")]
    public Byte[] slika1 {get; set;}

    [Column("slika_2")]
    public Byte[] slika2 {get; set;}
}