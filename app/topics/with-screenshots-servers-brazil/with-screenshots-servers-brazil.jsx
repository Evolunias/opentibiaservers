import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-brazil');
}

export default function WithScreenshotsServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-brazil" />;
}
