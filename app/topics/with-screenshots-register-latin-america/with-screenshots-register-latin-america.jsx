import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-latin-america');
}

export default function WithScreenshotsRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-latin-america" />;
}
