import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera');
}

export default function WithScreenshotsElderaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera" />;
}
