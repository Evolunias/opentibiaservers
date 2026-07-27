import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-germany');
}

export default function WithScreenshotsServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-germany" />;
}
