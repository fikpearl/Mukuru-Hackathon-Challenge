import React from 'react';
import './App.css';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://www.pindula.co.zw/images/3/3b/Mukuru-Logo.png" />
                    </div>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Financial Behavior">Financial Behavior</a></li>
                    <li><a href="#Financial Analysis">Financial Analysis</a></li>
                    <li><a href="#Tax Preparation">Tax Preparation</a></li>
                    
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                      Financial Behaviour
                        </h1>
                        <p class="text-small">

                            -Savings
                            -Debt
                            -Investment
                            -Insurance
                            -Retirement
                            -Property
                            -Budget
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Financial Analysis
                        </h1>
                        <p class="text-small">

                            -Benefits
                            -Budget Analysis
                            -Cash Flow
                            -Management Tools
                            -CashBack Rewards
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Tax Preparation
                        </h1>
                        <p class="text-small">

                        -Tax description
                        -What is the tax rate in South Africa?, 
                        -How does the e-filing system work? 
                        -How much tax do I owe in South Africa?
                        -What is the deadline for SARS tax returns?
                        -How do I reclaim my SARS funds?
                        -How much tax will be taken out of my paycheck?
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Contact Us
                        </h1>
                        <p class="text-small">

                            Phone number,USSD Code,Email Address
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App