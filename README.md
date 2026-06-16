# AAKAR – CM Dashboard Module

## Overview

The **CM Dashboard Module** is a strategic governance and decision-support dashboard within the **AAKAR (Administrative Analytics, Knowledge, Accountability & Resource Management)** platform.

It serves as a command-and-control center for senior government officials, providing real-time visibility into district performance, project execution, fund utilization, officer accountability, audit findings, and governance insights.

The dashboard is designed to enable data-driven decision-making at the highest levels of state administration.

---

## About AAKAR

AAKAR is a unified civic governance and administrative management platform designed to improve transparency, accountability, monitoring, and operational efficiency across government departments and districts.

The platform aims to provide:

* Governance Intelligence
* Project Monitoring
* Fund Tracking
* Administrative Oversight
* Audit Management
* Officer Performance Analytics
* AI-Assisted Decision Support

---

## CM Dashboard Objectives

The CM Dashboard provides a statewide overview of:

* District Performance
* Department Performance
* Major Government Projects
* Fund Allocation & Utilization
* Officer Accountability
* Audit Findings
* Critical Governance Alerts
* AI-Generated Insights

---

## Core Features

### State Health Overview

Provides high-level KPIs including:

* Total Districts
* Active Projects
* Delayed Projects
* Fund Utilization
* Pending Files
* Critical Alerts

### AI Governance Summary

AI-generated governance insights and recommendations.

Examples:

* District performance anomalies
* Project delay predictions
* Fund underutilization alerts
* Risk assessments

### State Heatmap

Interactive district-level performance visualization.

### District Ranking System

Ranks districts based on:

* Project Performance
* Fund Utilization
* Complaint Resolution
* Health Metrics
* Education Metrics
* Task Completion

### Major Project Monitoring

Tracks high-priority state projects with:

* Budget Status
* Progress Tracking
* Delay Analysis
* Responsible Officers

### Fund Utilization Dashboard

Department-wise and district-wise fund monitoring.

### Officer Performance Analytics

Tracks:

* District Magistrates
* Department Heads
* Deadline Compliance
* Performance Indicators

### Action Tracker

Tracks directives issued by senior officials and monitors execution progress.

### Audit Explorer

Provides searchable audit records and compliance monitoring.

### Communication Center

Facilitates coordination between:

* Chief Minister
* Chief Secretary
* Department Secretaries
* District Administrators

---

## Technology Stack

### Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* ShadCN UI
* TanStack Query
* Zustand
* Recharts
* Leaflet

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Redis
* Celery
* Alembic

### Infrastructure

* Docker
* Docker Compose

---

## Project Structure

```text
cm-dashboard/
├── frontend/
├── backend/
├── docs/
├── deployment/
├── README.md
├── docker-compose.yml
└── .env.example
```

---

## Current Development Status

### Phase 1

* [x] Repository Initialization
* [x] Frontend Setup (Next.js)
* [x] Dashboard Shell
* [ ] Dashboard Components
* [ ] FastAPI Backend Setup
* [ ] Database Models
* [ ] API Development
* [ ] Authentication & RBAC
* [ ] Heatmap Integration
* [ ] AI Governance Engine

---

## Roadmap

### Phase 2

* State Heatmap
* District Rankings
* Project Monitoring
* Fund Analytics

### Phase 3

* Officer Performance System
* Audit Explorer
* Action Tracker

### Phase 4

* AI Governance Layer
* Predictive Analytics
* Risk Detection Engine

### Phase 5

* Mobile Companion Application
* GIS Integration
* Real-Time Notifications

---

## License

Internal Project – AAKAR Platform

© 2025 AAKAR Development Team
