import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-website');
}

export default function WithScreenshotsSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-website" />;
}
