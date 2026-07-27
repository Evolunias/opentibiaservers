import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-server');
}

export default function WithScreenshotsEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-server" />;
}
