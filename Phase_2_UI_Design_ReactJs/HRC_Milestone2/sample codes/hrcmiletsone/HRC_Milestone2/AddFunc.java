package com.HRC_Milestone2;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AddFunc")
public class AddFunc extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");  
        PrintWriter out=response.getWriter();
        
        String name=request.getParameter("name");  
        String num=request.getParameter("num");  
        String id=request.getParameter("id");  
        String due_date=request.getParameter("duedate");
        String amount = request.getParameter("amount");
        String docId = String.valueOf((long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L);
        String note = request.getParameter("note")==null ? "" : request.getParameter("note");
        
        
        try {
			String dbDriver = "com.mysql.cj.jdbc.Driver"; 
	        String dbURL = "jdbc:mysql://localhost:3306/"; 
	        String dbName = "h2h_internship"; 
	        String dbUsername = "root"; 
	        String dbPassword = "root"; 
	        
	  
	        Class.forName(dbDriver); 
	        Connection con = DriverManager.getConnection(dbURL + dbName, dbUsername, dbPassword); 
	        PreparedStatement ps=con.prepareStatement(  
                    "INSERT INTO invoice_details(name_customer,cust_number,invoice_id,total_open_amount,due_in_date,doc_id,notes) VALUES (?,?,?,?,?,?,?)");
	        System.out.print(due_date);
	        ps.setString(1, name);
	        ps.setString(2, num);
	        ps.setDouble(3, Double.parseDouble(id));
	        ps.setDouble(4, Double.parseDouble(amount));
	        ps.setDate(5,java.sql.Date.valueOf(due_date));
	        ps.setDouble(6, Double.parseDouble(docId));
	        ps.setString(7, note);
	        ps.executeUpdate();
	        response.setStatus(200);
	       
	        con.close();
	        
	        }catch (Exception e) {
				e.printStackTrace();
				response.setStatus(400);
				
			} finally {
		        out.flush();
			}
		

        
	}

}
