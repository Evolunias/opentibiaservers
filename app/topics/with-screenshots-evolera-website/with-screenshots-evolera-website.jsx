import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-website');
}

export default function WithScreenshotsEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-website" />;
}
