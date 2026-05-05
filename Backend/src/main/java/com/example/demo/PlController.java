package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/placements")
public class PlController {

	@Autowired
	private PlServices plser;
	
	@PostMapping("/addpl")
    public Placement addPlacement(@RequestBody Placement pl) {
        return plser.addplacement(pl);
    }

	 @GetMapping("/getpl")
	    public List<Placement> getpl() {
	        return plser.getplacement();
	    }

	   @DeleteMapping("/deletepl/{id}")
	    public void deletePl(@PathVariable Integer id) {
	        plser.deleteplacement(id);
	    }

	    @PutMapping("/updatepl")
	    public Placement updatepl(@RequestBody Placement pl) {
	        return plser.updateplacement(pl);
	    }
	}


