// Script pop up untuk tampilan awal di aplikasi 
swal({
    // ucapan selamat datang di awal aplikasi
    html : `<h4 style="text-align:center">Selamat datang di aplikasi UMC - ITUNG. Ayo mulai pengalaman menghitung jenis bangun lebih asik bersama kami.<br/> Lets Go!</h4>`,
}).then(() => {
    // masukan input nama untuk menyapa user
    swal({
        title: `Masukan nama panggilanmu ?`,
        input: `text`,
    }).then((result) => {
        // pilih jenis bangun yang ingin di hitung 
        swal({
            title : `Jenis bangun apa yang ingin ${result.value} hitung hari ini ?`,
            input: "select",
            inputOptions: {
                ruang: 'Ruang',
                datar: 'Datar',
            },
            inputPlaceholder: 'Pilih jenis bangunnya !',
            showCancelButton: true,
        }).then((result) => {
            // pilih bangun datar
            if(result.value === `datar`){
                // pilih jenis bangun dtarnya
                swal({
                    title : `Bangun ${result.value} apa yang ingin kamu hitung ?`,
                    input : `radio`,
                    inputOptions : {
                        persegi : 'Persegi',
                        lingkaran : 'Lingkaran',
                    },
                }).then((result) => {
                    // pilihannya persegi 
                    if(result.value === `persegi`){
                        // pilih yang ingin di hitung di bangun datar yang sudah dipilih
                        swal({
                            title : `Apa yang ingin kamu hitung di bangun datar persegi ?`,
                            input : `select`,
                            inputOptions: {
                                luas : `Luas`,
                                keliling : `Keliling`,
                            },
                            inputPlaceholder : `Pilih yang akan kamu hitung !`
                        }).then((result) => {
                            // jika yang di pilih luas
                            if(result.value === `luas`){
                                // masukan sisi perseginya
                                swal({
                                    title : `Silahkan masukan panjang sisi dari perseginya ?`,
                                    html :  `<input id="inputPanjangSisi" placeholder="Masukan disini">`,
                                    preConfirm : () => {
                                        var x = document.getElementById("inputPanjangSisi").value
                                        return [x]
                                    }
                                }).then((result) =>  {
                                    // tekan tombol hitung
                                    swal("Silahkan tekan tombol hitung !")
                                    var data = result.value
                                    var x = data[0]
                                    document.getElementById("panjang").value = x
                                    document.getElementById("panjang").readOnly = true
                                    var p = document.getElementById("panjang")
                                    var q = document.getElementById("labelPanjang")
                                    p.classList.remove("hiden")
                                    q.classList.remove("hiden")
                                })
                                // akhir sisi persegi
                                document.getElementById("pilihanku4").value = "Luas"
                                document.getElementById("pilihanku4").readOnly = true
                            
                            } else if (result.value === `keliling`){ // jika yang di pilih keliling
                                // masukan sisi perseginya
                                swal({
                                    title : `Silahkan masukan panjang sisi dari perseginya ?`,
                                    html :  `<input id="inputPanjangSisi" placeholder="Masukan disini">`,
                                    preConfirm : () => {
                                        var x = document.getElementById("inputPanjangSisi").value
                                        return [x]
                                    }
                                }).then((result) =>  {
                                    // tekan tombol hitung
                                    swal("Silahkan tekan tombol hitung !")
                                    var data = result.value
                                    var x = data[0]
                                    document.getElementById("panjang").value = x
                                    document.getElementById("panjang").readOnly = true
                                    var p = document.getElementById("panjang")
                                    var q = document.getElementById("labelPanjang")
                                    p.classList.remove("hiden")
                                    q.classList.remove("hiden")
                                    
                                })
                                // akhir sisi persegi
                                document.getElementById("pilihanku4").value = "Keliling"
                                document.getElementById("pilihanku4").readOnly = true
                            }
                            // masukan nilai result ke dalam input da tambahkan readonly
                        })
                        document.getElementById("pilihanku2").value = "Persegi"
                        document.getElementById("pilihanku2").readOnly = true
                        // akhir pilihan luas / keliling dalam bangun datar
                    }else if (result.value === "lingkaran"){ // pilihannya lingkaran
                        // pilih apa yang mau di hitung di lingkaran
                        swal({
                            title : `Apa yang ingin kamu hitung di bangun datar lingkaran ?`,
                            input : `select`,
                            inputOptions: {
                                luas : `Luas`,
                                keliling : `Keliling`,
                            },
                            inputPlaceholder : `Pilih yang akan kamu hitung !`
                        }).then((result) => {
                            // jika yang mau di hitung luas
                            if(result.value === `luas`){
                                // apa yang di ketahui 
                                swal({
                                    title : `Apa yang di ketahui dalam lingkaran yang ingin kamu hitung ?`,
                                    input : `radio`,
                                    inputOptions : {
                                        jari2 : `Jari - jari`,
                                        diameter : `Diameter`
                                    },
                                    inputPlaceholder : `Pilih yang di ketahuinya !`
                                }).then((result) => {
                                    // jika yang di ketahui jari - jarinya
                                    if(result.value === `jari2`){
                                        // masukan panjang jari - jarinya
                                        swal({
                                            title : `Masukan panjang jari - jari dari lingkarang yang ingin di hitung ?`,
                                            html : `<input id="inputPanjangJari2" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangJari2").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            //mengambil data yang sudah di simpan sementara, menghapus kelas hiden dan 
                                            swal("Silahkan tekan tombol hitung !")
                                            var data = result.value
                                            var x = data[0]
                                            document.getElementById("jari2").value = x
                                            document.getElementById("jari2").readOnly = true
                                            var p = document.getElementById("jari2")
                                            var q = document.getElementById("labelJari2")
                                            p.classList.remove("hiden")
                                            q.classList.remove("hiden")
                                            
                                            
                                        })
                                        // akhir dari di ketahui jari - jarinya
                                    } else if (result.value === `diameter`){ // jika yang diketahui diameter
                                        swal({
                                            title : `Masukan panjang diameter dari lingkarang yang ingin di hitung ?`,
                                            html : `<input id="inputPanjangDiameter" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangDiameter").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                            var data = result.value
                                            var x = data[0]
                                            document.getElementById("diameter").value = x
                                            document.getElementById("diameter").readOnly = true
                                            var p = document.getElementById("diameter")
                                            var q = document.getElementById("labelDiameter")
                                            p.classList.remove("hiden")
                                            q.classList.remove("hiden")
                                            
                                        })
                                    }
                                })
                                document.getElementById("pilihanku4").value = "Luas"
                                document.getElementById("pilihanku4").readOnly = true
                                // akhir apa yang di ketahui
                            } else if(result.value === `keliling`) { //jika yang dihitung keliling
                                // apa yang di ketahui 
                                swal({
                                    title : `apa yang di ketahui dalam lingkaran yang ingin kamu hitung ?`,
                                    input : `radio`,
                                    inputOptions : {
                                        jari2 : `Jari - jari`,
                                        diameter : `Diameter`
                                    },
                                    inputPlaceholder : `Pilih yang di ketahuinya`
                                }).then((result) => {
                                    // jika yang di ketahui jari - jarinya
                                    if(result.value === `jari2`){
                                        swal({
                                            title : `Masukan panjang jari - jari dari lingkarang yang ingin di hitung ?`,
                                            html : `<input id="inputPanjangJari2" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangJari2").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                            var data = result.value
                                            var x = data[0]
                                            document.getElementById("jari2").value = x
                                            document.getElementById("jari2").readOnly = true
                                            var p = document.getElementById("jari2")
                                            var q = document.getElementById("labelJari2")
                                            p.classList.remove("hiden")
                                            q.classList.remove("hiden")
                                        })
                                        // akhir dari di ketahui jari - jarinya
                                    }  else if (result.value === `diameter`){ // jika yang diketahui diameter
                                        swal({
                                            title : `Masukan panjang diameter dari lingkarang yang ingin di hitung ?`,
                                            html : `<input id="inputPanjangDiameter" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangDiameter").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                            var data = result.value
                                            var x = data[0]
                                            document.getElementById("diameter").value = x
                                            document.getElementById("diameter").readOnly = true
                                            var p = document.getElementById("diameter")
                                            var q = document.getElementById("labelDiameter")
                                            p.classList.remove("hiden")
                                            q.classList.remove("hiden")
                                        })
                                    }
                                })
                                // akhir apa yang di ketahui
                                document.getElementById("pilihanku4").value = "Keliling"
                                document.getElementById("pilihanku4").readOnly = true
                            }
                        })
                        document.getElementById("pilihanku2").value = "Lingkaran"
                        document.getElementById("pilihanku2").readOnly = true
                    }
                    // akhir pilihan persegi
                })
                // akhir jenis bangun datar
                document.getElementById("pilihanku").value = "Bangun Datar"
                document.getElementById("pilihanku1").innerHTML = "datar"
                document.getElementById("pilihanku").readOnly = true
                // akhir pilihan bangun datar
            } else if(result.value === `ruang`){ // jika yang di pilih bangun ruang
                // pilih jenis bangun ruangnya
                swal({
                    title : `Bangun ${result.value} yang ingin kamu hitung ?`,
                    input : `radio`,
                    inputOptions : {
                        kubus : 'Kubus',
                        bola : 'Bola',
                    },
                }).then((result) => {
                    // jika yang dipilih kubus 
                    if (result.value === `kubus`){
                        // pilih yang ingin di hitung dalam bangun ruang 
                        swal({
                            title : `Apa yang ingin kamu hitung di bangun datar ${result.value} ?`,
                            input : `select`,
                            inputOptions : {
                                volume : `Volume`,
                                luas : `Luas Permukaan`
                            },
                            inputPlaceholder : `Pilih yang akan kamu hitung !`
                        }). then((result) => {
                            // jika yang di pilih luas permukaan
                            if (result.value === `luas`){
                                swal({
                                    title : `Masukan panjang sisi dari kubus yang ingin anda hitung luas permukaannya ?`,
                                    html : `<input id="inputPanjangSisi" placeholder="Masukan disini">`,
                                    preConfirm : () => {
                                        var x = document.getElementById("inputPanjangSisi").value
                                        return [x]
                                    }
                                }).then((result) => {
                                    // tekan tombol hitung
                                    swal("Silahkan tekan tombol hitung !")
                                        var data = result.value
                                        var x = data[0]
                                        document.getElementById("panjang").value = x
                                        document.getElementById("panjang").readOnly = true
                                        var p = document.getElementById("panjang")
                                        var q = document.getElementById("labelPanjang")
                                        p.classList.remove("hiden")
                                        q.classList.remove("hiden")
                                })

                                document.getElementById("pilihanku4").value = `Luas Permukaan`
                                document.getElementById("pilihanku4").readOnly = true

                            } else if (result.value === `volume`){ // jika yang di pilih volume
                                swal({
                                    title : `Masukan panjang sisi dari kubus yang ingin kamu hitung volumenya ?`,
                                    html : `<input id="inputPanjangSisi1" placeholder="Masukan disini">`,
                                    preConfirm : () => {
                                        var x = document.getElementById("inputPanjangSisi1").value
                                        return [x]
                                    }
                                }).then((result) => {
                                    // tekan tombol hitung
                                    swal("Silahkan tekan tombol hitung !")
                                        var data = result.value
                                        var x = data[0]
                                        document.getElementById("panjang").value = x;
                                        document.getElementById("panjang").readOnly = true;
                                        var p = document.getElementById("panjang")
                                        var q = document.getElementById("labelPanjang")
                                        p.classList.remove("hiden")
                                        q.classList.remove("hiden")
                                })

                                document.getElementById("pilihanku4").value = 'Volume'
                                document.getElementById("pilihanku4").readOnly = true
                            }
                        })

                        document.getElementById("pilihanku2").value = `Kubus`
                        document.getElementById("pilihanku2").readOnly = true
                        

                    } else if (result.value === `bola`){ // jika yang dipilih bola 
                        // pilih yang ingin di hitung dalam bangun ruang 
                        swal({
                            title : `Apa yang ingin kamu hitung di bangun ruang ${result.value} ?`,
                            input : `select`,
                            inputOptions : {
                                volume : `Volume`,
                                luas : `Luas Permukaan`
                            },
                            inputPlaceholder : `Pilih yang akan kamu hitung !`
                        }). then((result) => {
                            // jika yang di pilih luas
                            if (result.value === `luas`){
                                swal({
                                    title : `Apa yang di ketahui  ?`,
                                    input : `select`,
                                    inputOptions : {
                                        jari2 : `Jari - jari`,
                                        diameter : `Diameter`
                                    },
                                    inputPlaceholder : `Pilih yang di ketahuinya !`
                                }).then ((result) => {
                                    if (result.value === `jari2`){
                                        swal({
                                            title : `Masukan panjang jari - jari dari bola yang ingin anda hitung luas permukaannya ?`,
                                            html : `<input id="inputPanjangJari2" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangJari2").value
                                                return [x]; 
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                                var data = result.value;
                                                var x = data[0];
                                                document.getElementById("jari2").value = x;
                                                document.getElementById("jari2").readOnly = true;
                                                var p = document.getElementById("jari2");
                                                var q = document.getElementById("labelJari2");
                                                p.classList.remove("hiden");
                                                q.classList.remove("hiden");
                                        })
        
                                    } else if (result.value === `diameter`){
                                        swal({
                                            title : `Masukan panjang diameter dari bola yang ingin anda hitung luas permukaannya ?`,
                                            html : `<input id="inputPanjangDiameter" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangDiameter").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                                var data = result.value
                                                var x = data[0]
                                                document.getElementById("diameter").value = x
                                                document.getElementById("diameter").readOnly = true
                                                var p = document.getElementById("diameter")
                                                var q = document.getElementById("labelDiameter")
                                                p.classList.remove("hiden")
                                                q.classList.remove("hiden")
                                        })
                                    }

                                })
                                document.getElementById("pilihanku4").value = `Luas Permukaan`
                                document.getElementById("pilihanku4").readOnly = true
                                
                            } else if (result.value === `volume`){
                                swal({
                                    title : `Apa yang di ketahui  ?`,
                                    input : `select`,
                                    inputOptions : {
                                        jari2 : `Jari - jari`,
                                        diameter : `Diameter`
                                    },
                                    inputPlaceholder : `Pilih yang di ketahuinya !`
                                }).then ((result) => {
                                    if (result.value === `jari2`){
                                        swal({
                                            title : `Masukan panjang jari - jari dari bola yang ingin anda hitung luas permukaannya ?`,
                                            html : `<input id="inputPanjangJari2" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangJari2").value
                                                return [x]
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                                var data = result.value
                                                var x = data[0]
                                                document.getElementById("jari2").value = x
                                                document.getElementById("jari2").readOnly = true
                                                var p = document.getElementById("jari2")
                                                var q = document.getElementById("labelJari2")
                                                p.classList.remove("hiden")
                                                q.classList.remove("hiden")
                                        })
        
                                    } else if (result.value === `diameter`){
                                        swal({
                                            title : `Masukan panjang diameter dari bola yang ingin anda hitung luas permukaannya ?`,
                                            html : `<input id="inputPanjangDiameter" placeholder="Masukan disini">`,
                                            preConfirm : () => {
                                                var x = document.getElementById("inputPanjangDiameter").value
                                                return [x] 
                                            }
                                        }).then((result) => {
                                            // tekan tombol hitung
                                            swal("Silahkan tekan tombol hitung !")
                                                var data = result.value
                                                var x = data[0]
                                                document.getElementById("diameter").value = x
                                                document.getElementById("diameter").readOnly = true
                                                var p = document.getElementById("diameter")
                                                var q = document.getElementById("labelDiameter")
                                                p.classList.remove("hiden")
                                                q.classList.remove("hiden")
                                        })
                                    }

                                    document.getElementById("pilihanku4").value = "Volume"
                                    document.getElementById("pilihanku4").readOnly = true
                                })
                                document.getElementById("pilihanku3").value = "Volume"
                            }

                        })
                        document.getElementById("pilihanku2").value = "Bola"
                        document.getElementById("pilihanku2").readOnly = true
                    }

                    
                })

                document.getElementById("pilihanku").value = "Bangun Ruang"
                document.getElementById("pilihanku1").innerHTML = "ruang"
                document.getElementById("pilihanku").readOnly = true
            }
        })
        // akhir pilihan jenis bangun
        document.getElementById("name").innerHTML = `Selamat datang ` + result.value
        document.getElementById("name1").innerHTML = result.value
        document.getElementById("name2").innerHTML = result.value
        

    }) 
    // akhir input nama 
})


// operasi hitung 
function hitung(){

    var jenisBangun = document.getElementById("pilihanku").value // ambil nilai bangun yang mau di hitung bangun ruang atau bangun datar
    var namaBangun = document.getElementById("pilihanku2").value // ambil nilai tipe bangun datar / ruang yang mau di hitung 
    var hitungBangun = document.getElementById("pilihanku4").value // ambil nilai luas atau keliling
    var diketahuiL1 = document.getElementById("jari2").value // untuk lingkaran jika di ketahui jari - jarinya
    var diketahuiL2 = document.getElementById("diameter").value // untuk lingkaran jika di ketahui diameternya
    // logika hitung bangun datar
    if(jenisBangun === `Bangun Datar`){
        // jika persegi yang mau di hitung
        if(namaBangun === `Persegi`){
            // jika luas persegi yang mau di hitung
            if(hitungBangun === `Luas`){

                var x = parseInt(document.getElementById("panjang").value);
                var hitung = x * x;

                swal(`Hasil luas dari persegi yang kamu hitung adalah ${hitung}`);
            }else { // jika keliling persegi yang mau di hitung
                var x = parseInt(document.getElementById("panjang").value);
                var hitung = 4 * x;

                swal(`Hasil keliling dari persegi yang kamu hitung adalah ${hitung}`);
            }

        } else if (namaBangun === `Lingkaran`){ // jika lingkaran yang mau di hitung
            // jika luas Lingkaran yang mau di hitung
            if(hitungBangun === `Luas`){
                // jika yang di ketahui jari - jari lingkarannya
                if (diketahuiL1 !== null & diketahuiL2 == ''){

                    var x = parseInt(document.getElementById("jari2").value);
                    var hitung = (22/7) * (x * x);

                    swal(`Hasil luas dari lingkaran yang kamu hitung adalah ${hitung}`);

                } else if (diketahuiL2 !== null & diketahuiL1 == ''){ // jika yang di ketahui diameter lingkarannya

                    var x = parseInt(document.getElementById("diameter").value);
                    var y = x/2
                    var hitung = (22/7) * (y * y);

                    swal(`Hasil luas dari lingkaran yang kamu hitung adalah ${hitung}`);

                }
            } else if (hitungBangun === `Keliling`){ // jika keliling lingkaran yang mau di hitung
                // jika yang di ketahui jari - jari lingkaran
                if (diketahuiL1 !== null & diketahuiL2 == ``){

                    var x = parseInt(document.getElementById("jari2").value);
                    var hitung = (2* (22/7) * x) 

                    swal(`Hasil keliling dari lingkaran yang kamu hitung adalah ${hitung}`)

                } else if (diketahuiL2 !== null & diketahuiL1 == ``){

                    var x = parseInt(document.getElementById("diameter").value)
                    var hitung = (22/7) * x

                    swal(`Hasil keliling dari lingkaran yang kamu hitung adalah ${hitung}`)
                }
            }

        }

    } else if (jenisBangun === `Bangun Ruang`){ // jika yang ingin di hitung adalah bangun ruang
        // jika yang di pilih kubus
        if (namaBangun === `Kubus`){
            // jika luas permukaan dari kubus yang ingin di hitung
            if(hitungBangun === `Luas Permukaan`){
                
                var x = parseInt(document.getElementById("panjang").value)
                var hitung = 6 * (x*x)

                swal(`Hasil luas permukaan dari kubus yang kamu hitung adalah ${hitung}`)

            } else if (hitungBangun === `Volume`){ // jika volune yang ingin dihitung
                var x = parseInt(document.getElementById("panjang").value)
                var hitung = (x * x * x)

                swal(`Hasil volume dari kubus yang kamu hitung adalah ${hitung}`)
            }

        } else if (namaBangun === `Bola`){ // jika yang dipilih kubus 
            if(hitungBangun === `Luas Permukaan`){
                if (diketahuiL1 !== null & diketahuiL2 == ``){
                    var x = document.getElementById("jari2").value
                    var hitung = 4 * (22/7) * (x*x)

                    swal(`Hasil luas permukaan dari bola yang kamu hitung adalah ${hitung}`)
                } else if (diketahuiL2 !== null & diketahuiL1 == ``){
                    var x = document.getElementById("diameter").value
                    var y = x/2
                    var hitung = 4 * (22/7) * ( y* y) 

                    swal(`Hasil luas permukaan dari bola yang kamu hitung adalah ${hitung}`)
                }

            } else if (hitungBangun === `Volume`){
                if (diketahuiL1 !== null & diketahuiL2 == `` ){
                    var x = document.getElementById("jari2").value
                    var hitung = (4/3) * ((22/7) * x * x * x)

                    swal(`Hasil volume dari bola yang kamu hitung adalah ${hitung}`)
                } else if (diketahuiL2 !== null & diketahuiL1 == ``){
                    var x = document.getElementById("diameter").value
                    var y = x/2
                    var hitung = (4/3) * ((22/7) * y * y * y)

                    swal(`Hasil volume dari bola yang kamu hitung adalah ${hitung}`)
                }
            }
            
        }
    }

    
}