import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-latin-america');
}

export default function WithScreenshotsServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-latin-america" />;
}
