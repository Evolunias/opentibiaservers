import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-chile');
}

export default function XanteriaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-chile" />;
}
