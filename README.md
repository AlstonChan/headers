# Headers

Generate perfect code headers every time.

## Usage

### Basic Usage

```bash
 ~ npx @chan_alston/headers@latest hello world
```

```bash
/****************************************************************
                          HELLO WORLD
****************************************************************/
```

### Single Line Header

Use the `-s` flag for a compact single-line header:

```bash
 ~ npx @chan_alston/headers@latest -s hello world
```

```bash
/************************* HELLO WORLD *************************/
```

### Slashes Only

Use the `--slashes` flag to replace asterisks with forward slashes:

```bash
 ~ npx @chan_alston/headers@latest --slashes hello world
```

```bash
/////////////////////////////////////////////////////////////////
                          HELLO WORLD
/////////////////////////////////////////////////////////////////
```

### Single Line with Slashes

Combine both flags for a single-line header with slashes:

```bash
 ~ npx @chan_alston/headers@latest -s --slashes hello world
```

```bash
///////////////////////// HELLO WORLD /////////////////////////
```

### Flags

- `-s` - Generate a single line header instead of three lines
- `--slashes` - Use forward slashes (`/`) instead of asterisks (`*`)

Flags can be used together and in any order.

## License

[MIT License](./LICENSE)
