import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-argentina');
}

export default function WithScreenshotsServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-argentina" />;
}
