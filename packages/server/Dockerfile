# Build stage
FROM python:3.12.0a5-slim as build

WORKDIR /usr/app
RUN python -m venv /usr/app/venv
ENV PATH="/usr/app/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install -r requirements.txt || exit 1


# Runtime stage
FROM python:3.12.0a5-slim@sha256:746c2fa0bb938895a58b8a76e76cbce37ae5f339c4580c896021cf440bc766d6 as local
WORKDIR /usr/app
COPY --from=build /usr/app/venv ./venv
COPY . .

ENV PATH="/usr/app/venv/bin:$PATH"
CMD [ "python3", "./run.py" ]


# Runtime stage
FROM python:3.12.0a5-slim@sha256:746c2fa0bb938895a58b8a76e76cbce37ae5f339c4580c896021cf440bc766d6 as production
WORKDIR /usr/app
COPY --from=build /usr/app/venv ./venv
COPY . .

ENV PATH="/usr/app/venv/bin:$PATH"
CMD [ "gunicorn", "--bind", "0.0.0.0:5000", "manage:app" ]
