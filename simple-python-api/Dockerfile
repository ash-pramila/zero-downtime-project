FROM python:3-alpine
ENV PYTHON_HOME=/app
WORKDIR ${PYTHON_HOME}
COPY *.py /${PYTHON_HOME}/
COPY requirements.txt /${PYTHON_HOME}/
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "simple_api.py"]
