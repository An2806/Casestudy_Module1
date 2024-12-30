
body {
     family;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fffaf0; /* Màu nền nhã nhặn */
    color: #333;
}

.header {
    text-align: center;
    background-color: #b02a37;
    color: white;
    padding: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header h1 {
    font-size: 36px;
    margin: 0;
}

.header p {
    margin: 0;
    font-size: 18px;
}

.mainbody {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    gap: 20px;
}

.form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex: 1;
}

.form h2 {
    color: #b02a37;
}

form input,
    form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

form button {
    padding: 10px 20px;
    background-color: #b02a37;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

form button:hover {
    background-color: #ff6347;
}

.view {
    flex: 2;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.view table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.view th, .view td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.view th {
    background-color: #f2dede;
    color: #b02a37;
}

.view tbody tr:nth-child(even) {
    background-color: #fdf2f4;
}

.view tbody tr:hover {
    background-color: #fae3e7;
}

#lantern {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    background: url('https://example.com/lantern.png') no-repeat center;
    background-size: contain;
    animation: swing 3s infinite ease-in-out;
}

@keyframes swing {
    0%, 100% {
        transform: rotate(-10deg);
}
    50% {
        transform: rotate(10deg);
}
}

.flower {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: auto;
    animation: fall 4s infinite;
}

@keyframes fall {
    0% {
        transform: translateY(-50px);
    opacity: 1;
}
    100% {
        transform: translateY(100vh);
    opacity: 0;
}

