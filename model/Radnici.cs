
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table ("radnici")]
public class Radnici{

    [Key]
    [Column ("jmbg")]
    public string jmbg {get; set;}

    [Column ("pin")]
    public string pin {get; set;}

    [Column ("ime")]
    public string ime {get; set;}

    [Column ("prezime")]
    public string prezime {get; set;}

    [Column ("titula")]
    public string titula {get; set;}

    [Column ("funkcija")]
    public string funkcija {get; set;}

    [Column ("sluzba")]
    public string sluzba {get; set;}

    [Column ("vreme_od_1")]
    public DateTime vreme_od_1 {get; set;}

    [Column ("vreme_do_1")]
    public DateTime vreme_do_1 {get; set;}

    [Column ("vreme_od_2")]
    public DateTime vreme_od_2 {get; set;}

    [Column ("vreme_do_2")]
    public DateTime vreme_do_2 {get; set;}
}