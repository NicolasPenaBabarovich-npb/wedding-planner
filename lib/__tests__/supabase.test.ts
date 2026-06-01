describe('supabase client', () => {
  it('returns null when env vars are missing', () => {
    delete process.env.EXPO_PUBLIC_SUPABASE_URL;
    delete process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

    jest.resetModules();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { supabase } = require('../supabase');

    expect(supabase).toBeNull();
  });
});
