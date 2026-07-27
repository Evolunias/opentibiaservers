import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot');
}

export default function WithScreenshotsSaintsotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot" />;
}
