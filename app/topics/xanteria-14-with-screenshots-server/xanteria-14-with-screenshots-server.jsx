import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-with-screenshots-server');
}

export default function Xanteria14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-with-screenshots-server" />;
}
