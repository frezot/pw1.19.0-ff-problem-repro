# pw1.19.0-ff-problem-repro

Problem:

Can't launch firefox in fresh docker image (`"mcr.microsoft.com/playwright:v1.19.0"`)

Steps to reproduce:

```bash
# clean old image (if any)
docker rmi mcr.microsoft.com/playwright:v1.19.0
# pull fresh one
docker pull mcr.microsoft.com/playwright:v1.19.0
```

Hashes:

```bash
1.19.0: Pulling from playwright
08c01a0ec47e: Pull complete
c791a8280a4d: Pull complete
4b7af7e8d426: Pull complete
12b8cab0d0a7: Pull complete
Digest: sha256:cd3f2a52eed39b2367266d2dffac49a1e01e787c2715b6e9974bd1a120548b45
Status: Downloaded newer image for mcr.microsoft.com/playwright:v1.19.0
```

Now run container

```bash
docker-compose run --rm tests

```

Than run tests inside

```bash
npx playwright test -u
```

Expected:

- success run with new snapshots at `test-results`

Actual

```bash
Running 3 tests using 3 workers
  1) [firefox] › example.spec.ts:6:3 › Describe › Simple snapshot-test =============================

    browserType.launch:
    ╔════════════════════════════════════════════════════════════╗
    ║ Host system is missing a few dependencies to run browsers. ║
    ║ Please install them with the following command:            ║
    ║                                                            ║
    ║     npx playwright install-deps                            ║
    ║                                                            ║
    ║ <3 Playwright Team                                         ║
    ╚════════════════════════════════════════════════════════════╝




[chromium] › example.spec.ts:6:3 › Describe › Simple snapshot-test
/opt/uitests/tests/example.spec.ts-snapshots/demo--screen-chromium-linux is missing in snapshots, writing actual.
[webkit] › example.spec.ts:6:3 › Describe › Simple snapshot-test
/opt/uitests/tests/example.spec.ts-snapshots/demo--screen-webkit-linux is missing in snapshots, writing actual.

  1 failed
    [firefox] › example.spec.ts:6:3 › Describe › Simple snapshot-test ==============================
  2 passed (4s)
```

`npx playwright install-deps` works without error but nothing changes
