package com.example.myead2project.controller;

import com.example.myead2project.model.Student;
import com.example.myead2project.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class Controller {
@Autowired
    StudentRepository studentRepo;

    @GetMapping(path = "/students")
    public List<Student> getAllDetails() { 

        return  studentRepo.findAll();

        //http://localhost:8080/api/students
    }
    //insert
    @PostMapping(path = "/students")
    void insertDetails(@RequestBody Student student)
    {
        studentRepo.save(student);

    }

    // delete student rest api
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable int id){
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> {
                    return new InvalidConfigurationPropertyValueException("Student not exist " , studentRepo,"");
                });

        studentRepo.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    // get student by id rest api
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Student not exist " , studentRepo,""));
        return ResponseEntity.ok(student);
    }
    // update student by id rest api
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student studentObject){
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Student not exist " , studentRepo,""));

        student.setName(studentObject.getName());
        student.setAge(studentObject.getAge());
        student.setAddress(studentObject.getAddress());
        student.setSubject(studentObject.getSubject());
        student.setResult(studentObject.getResult());



        Student updatedStudent = studentRepo.save(student);
        return ResponseEntity.ok(updatedStudent);
    }


}
