package es6.study.module.module.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MdlController {

	@RequestMapping(value = "/module_test.html", method = RequestMethod.GET)
	public ModelAndView module(ModelAndView mv) {
		mv.setViewName("module/test");
		return mv;
	}

	@RequestMapping(value = "/es6_app.html", method = RequestMethod.GET)
	public ModelAndView es6App(ModelAndView mv) {
		mv.setViewName("module/app");
		return mv;
	}

}
