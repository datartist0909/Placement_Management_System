package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlServices {
	@Autowired
	    private PlRepository plrepo;
	
	public Placement addplacement(Placement pl) {
        return plrepo.save(pl);
    }
	
	 public List<Placement> getplacement() {
	        return plrepo.findAll();
	    }

	    public void deleteplacement(int id) {
	        plrepo.deleteById(id);
	    }

	    public Placement updateplacement(Placement pl) {
	        Integer plid = pl.getId();
	        Placement pl1 = plrepo.findById(plid).get();
	        pl1.setName(pl.getName());
			pl1.setCollege(pl.getCollege());
			pl1.setQualification(pl.getQualification());
			pl1.setYear(pl.getYear());

			return plrepo.save(pl1);
	    }
	}
