import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-forum');
}

export default function ZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-forum" />;
}
