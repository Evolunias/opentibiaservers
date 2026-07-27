import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-login');
}

export default function WithScreenshotsEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-login" />;
}
