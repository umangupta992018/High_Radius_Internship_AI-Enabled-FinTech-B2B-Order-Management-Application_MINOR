package com.highradius;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DBbackendAddInvoice {
	protected static void addInvoice(Connection conn,pojoAddInvoice object) throws SQLException {
		
	String sql="Insert into invoice_details (name_customer, cust_number, doc_id, due_in_date, total_open_amount, notes)";
	PreparedStatement stmt=conn.prepareStatement(sql);
	stmt.setString(1, object.getName_customer());
	stmt.setString(2, object.getCust_number());
	stmt.setLong(3, object.getDoc_id());
	//stmt.setString(4, object.getInvoice_id());
	stmt.setDate(4, object.getDue_in_date());
	stmt.setDouble(5, object.getTotal_open_amount());
	stmt.setString(6, object.getNotes());
	
	
	stmt.executeUpdate();
	stmt.close();
	}
}
